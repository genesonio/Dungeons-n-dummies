import {useEffect, useState} from "react"

import {
  Accordion,
  Avatar,
  Container,
  Divider,
  Group,
  Loader,
  NumberInput,
  Progress,
  ScrollArea,
  Stack,
  Text,
  TextInput
} from "@mantine/core"

import useStyles from "./Sheet.style"
import expByLvl from "@/utils/levelUtils"

import {character} from "@/utils/tempChar"
import type {ICharacter} from "@/types/char"

interface IStatus {
  exp: number
  level: number
}

const Sheet = () => {
  const [status, setStatus] = useState<IStatus>({level: 1, exp: 0})

  const [char, setChar] = useState<ICharacter>(character)

  useEffect(() => {
    setChar(character)
    setStatus(char.level)
  }, [])

  const {classes} = useStyles()

  const handleExpChange = (value: number | "") => {
    if (value === "") return setStatus({level: 1, exp: 0})

    setStatus(prev => ({...prev, exp: value}))

    if (value >= (expByLvl[49] as number))
      return setStatus(prev => ({...prev, lvl: 50}))

    for (let i = 0; i < expByLvl.length; i++) {
      const minorExp = expByLvl[i] as number
      const maxExp = expByLvl[i + 1] as number
      if (value >= minorExp && value < maxExp) {
        setStatus(prev => ({...prev, level: i + 1}))
      }
    }
  }

  const handleStatChange = (
    statName: keyof ICharacter["stats"],
    value: number | ""
  ) => {
    setChar(prevChar => ({
      ...prevChar,
      stats: {
        ...prevChar.stats,
        [statName]: value === "" ? 0 : value
      }
    }))
  }

  const handleCharChange = (statChar: keyof ICharacter, value: string) => {
    setChar(prev => ({
      ...prev,
      [statChar]: value
    }))
  }

  if (!char) return <Loader />

  const {stats, skills} = char

  const calculateBonus = (stat: number) => Math.floor(stat / 3)

  return (
    <Container className={classes.sheet}>
      <Avatar
        alt={
          char.avatar === ""
            ? "Placeholder de imagem"
            : `Representação do personagem ${char.name}`
        }
        variant="outline"
        src={char.avatar}
        className={classes.picture}
      />

      <Divider color="white" label="Condição" labelPosition="center" />

      <Stack className={classes.stats}>
        <Group>
          <Stack className={classes.bars} spacing="xs">
            <NumberInput
              variant="unstyled"
              label="HP"
              value={stats.currentHp}
              max={stats.hp}
              onChange={num => handleStatChange("currentHp", num)}
            />
            <Progress
              label={`${stats.currentHp} / ${stats.hp}`}
              color="red"
              size="xl"
              value={(100 / stats.hp) * stats.currentHp}
            />
          </Stack>
          <Stack className={classes.bars} spacing="xs">
            <Group>
              <NumberInput
                className={classes.sp}
                variant="unstyled"
                label="SP"
                value={stats.currentSp}
                max={stats.sp}
                onChange={num => handleStatChange("currentSp", num)}
              />
              <Text component="p">+ {calculateBonus(stats.sp)}</Text>
            </Group>
            <Progress
              color="blue"
              label={`${stats.currentSp} / ${stats.sp}`}
              size="xl"
              value={(100 / stats.sp) * stats.currentSp}
            />
          </Stack>
        </Group>
      </Stack>

      <Divider color="white" label="Status" labelPosition="center" />

      <Group spacing="xs">
        <Stack className={classes.attributes}>
          <NumberInput
            variant="unstyled"
            label="Força"
            value={stats.str}
            onChange={num => handleStatChange("str", num)}
          />
          <Text component="p">+ {calculateBonus(stats.str)}</Text>
        </Stack>
        <Stack className={classes.attributes}>
          <NumberInput
            variant="unstyled"
            label="Destreza"
            value={stats.dex}
            onChange={num => handleStatChange("dex", num)}
          />
          <Text component="p">+ {calculateBonus(stats.dex)}</Text>
        </Stack>
        <Stack className={classes.attributes}>
          <NumberInput
            variant="unstyled"
            label="Inteligência"
            value={stats.int}
            onChange={num => handleStatChange("int", num)}
          />
          <Text component="p">+ {calculateBonus(stats.int)}</Text>
        </Stack>
        <Stack className={classes.attributes}>
          <NumberInput
            variant="unstyled"
            label="Carisma"
            value={stats.char}
            onChange={num => handleStatChange("char", num)}
          />
          <Text component="p">+ {calculateBonus(stats.char)}</Text>
        </Stack>
        <NumberInput
          className={classes.firstInfo}
          label="Level"
          defaultValue={1}
          min={1}
          max={50}
          hideControls
          variant="unstyled"
          value={status.level}
        />
        <NumberInput
          className={classes.firstInfo}
          label="Experiência"
          defaultValue={0}
          min={0}
          hideControls
          variant="unstyled"
          value={status.exp}
          onChange={value => handleExpChange(value)}
        />
      </Group>

      <Divider color="white" label="Inf. Básica" labelPosition="center" />

      <Group className={classes.baseInfo}>
        <TextInput
          className={classes.firstInfo}
          label="Nome"
          placeholder="Nome do personagem"
          variant="unstyled"
          value={char.name}
          onChange={({target}) => handleCharChange("name", target.value)}
        />
        <TextInput
          className={classes.firstInfo}
          label="Ancestralidade"
          placeholder="Ancest. do personagem"
          variant="unstyled"
          value={char.race}
          onChange={({target}) => handleCharChange("race", target.value)}
        />
        <TextInput
          className={classes.firstInfo}
          label="Vocação"
          placeholder="Vocação do personagem"
          variant="unstyled"
          value={char.role}
          onChange={({target}) => handleCharChange("role", target.value)}
        />
        <TextInput
          className={classes.firstInfo}
          label="Servo Fiel"
          placeholder="Entidade adorada pelo personagem"
          variant="unstyled"
          value={char.divinity}
          onChange={({target}) => handleCharChange("divinity", target.value)}
        />
      </Group>

      <Divider color="white" label="Habilidades" labelPosition="center" />

      <Stack className={classes.skills} spacing="xs">
        <ScrollArea.Autosize
          scrollHideDelay={500}
          scrollbarSize={8}
          offsetScrollbars
          className={classes.skillsS}
        >
          <Accordion>
            {skills.map(skill => (
              <Accordion.Item key={skill.id} value={skill.name}>
                <Accordion.Control className={classes.skill}>
                  {skill.name}{" "}
                  {skill.attribute ? <Text>Mod: {skill.attribute}</Text> : null}
                </Accordion.Control>
                <Accordion.Panel className={classes.skillD}>
                  <Group>
                    {skill.effect ? <Text>Efeito: {skill.effect}</Text> : null}
                    <Text>Tipo: {skill.type}</Text>
                  </Group>
                  <Text>{skill.description}</Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </ScrollArea.Autosize>
      </Stack>

      <Divider color="white" label="Inventário" labelPosition="center" />
    </Container>
  )
}

export default Sheet
