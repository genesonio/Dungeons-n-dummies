import {useEffect, useState} from "react"

import {
  Avatar,
  Container,
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
    setStatus(character.level)
  }, [])

  const {classes} = useStyles()

  const handleChange = (value: number | "") => {
    if (value === "") return setStatus({level: 1, exp: 0})

    setStatus(prev => ({...prev, exp: value}))

    if (value >= (expByLvl[49] as number))
      return setStatus(prev => ({...prev, lvl: 50}))

    for (let i = 0; i < expByLvl.length; i++) {
      const minorExp = expByLvl[i] as number
      const maxExp = expByLvl[i + 1] as number
      if (value >= minorExp && value < maxExp) {
        setStatus(prev => ({...prev, lvl: i + 1}))
      }
    }
  }

  if (!char) return <Loader />

  return (
    <Container className={classes.sheet}>
      <Avatar alt="" variant="outline" src={null} className={classes.picture} />

      <Stack className={classes.stats}>
        <Group>
          <Stack className={classes.bars} spacing="xs">
            <NumberInput
              variant="unstyled"
              label="HP"
              value={char.stats.currentHp}
              max={char.stats.hp}
              onChange={e =>
                setChar(prev => ({
                  ...prev,
                  stats: {
                    ...prev.stats,
                    currentHp: e === "" ? 0 : e
                  }
                }))
              }
            />
            <Progress
              label={
                char.stats.currentHp.toString() +
                " / " +
                char.stats.hp.toString()
              }
              color="red"
              size="xl"
              value={(100 / char.stats.hp) * char.stats.currentHp}
            />
          </Stack>
          <Stack className={classes.bars} spacing="xs">
            <Group>
              <NumberInput
                className={classes.sp}
                variant="unstyled"
                label="SP"
                value={char.stats.currentSp}
                max={char.stats.sp}
                onChange={e =>
                  setChar(prev => ({
                    ...prev,
                    stats: {
                      ...prev.stats,
                      currentSp: e === "" ? 0 : e
                    }
                  }))
                }
              />
              <Text component="p">+ {Math.floor(5 / 3)}</Text>
            </Group>
            <Progress
              color="blue"
              label={
                char.stats.currentSp.toString() +
                " / " +
                char.stats.sp.toString()
              }
              size="xl"
              value={(100 / char.stats.sp) * char.stats.currentSp}
            />
          </Stack>
        </Group>

        <Group spacing="xs">
          <Stack className={classes.attributes}>
            <NumberInput
              variant="unstyled"
              label="Força"
              value={char.stats.str}
            />
            <Text component="p">+ {Math.floor(char.stats.str / 3)}</Text>
          </Stack>
          <Stack className={classes.attributes}>
            <NumberInput
              variant="unstyled"
              label="Destreza"
              value={char.stats.dex}
            />
            <Text component="p">+ {Math.floor(char.stats.dex / 3)}</Text>
          </Stack>
          <Stack className={classes.attributes}>
            <NumberInput
              variant="unstyled"
              label="Inteligência"
              value={char.stats.int}
            />
            <Text component="p">+ {Math.floor(char.stats.int / 3)}</Text>
          </Stack>
          <Stack className={classes.attributes}>
            <NumberInput
              variant="unstyled"
              label="Carisma"
              value={char.stats.char}
            />
            <Text component="p">+ {Math.floor(char.stats.char / 3)}</Text>
          </Stack>
        </Group>
      </Stack>

      <Group className={classes.baseInfo}>
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
          onChange={value => handleChange(value)}
        />
        <TextInput
          className={classes.firstInfo}
          label="Nome"
          placeholder="Nome do personagem"
          variant="unstyled"
          value={char.name}
          onChange={e => setChar(prev => ({...prev, name: e.target.value}))}
        />
        <TextInput
          className={classes.firstInfo}
          label="Ancestralidade"
          placeholder="Ancest. do personagem"
          variant="unstyled"
          value={char.race}
          onChange={e => setChar(prev => ({...prev, race: e.target.value}))}
        />
        <TextInput
          className={classes.firstInfo}
          label="Vocação"
          placeholder="Vocação do personagem"
          variant="unstyled"
          value={char.role}
          onChange={e => setChar(prev => ({...prev, role: e.target.value}))}
        />
        <TextInput
          className={classes.firstInfo}
          label="Servo Fiel"
          placeholder="Entidade adorada pelo personagem"
          variant="unstyled"
          value={char.divinity}
          onChange={e => setChar(prev => ({...prev, divinity: e.target.value}))}
        />
      </Group>

      <ScrollArea.Autosize
        scrollHideDelay={500}
        scrollbarSize={8}
        offsetScrollbars
        className={classes.skills}
      >
        {character.skills.map(skill => (
          <p key={skill.id}>{skill.name}</p>
        ))}
      </ScrollArea.Autosize>
    </Container>
  )
}

export default Sheet
