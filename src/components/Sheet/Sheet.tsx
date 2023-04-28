import {useState} from "react"

import {Container, Group, NumberInput, TextInput} from "@mantine/core"

import {Avatar} from "../Avatar"

import useStyles from "./Sheet.style"
import expByLvl from "@/utils/levelUtils"

interface IStatus {
  exp: number
  lvl: number
}

const Sheet = () => {
  const [status, setStatus] = useState<IStatus>({
    lvl: 1,
    exp: 0
  })
  const {classes} = useStyles()

  const handleChange = (value: number | "") => {
    if (value === "") return setStatus({lvl: 1, exp: 0})

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

  return (
    <Container className={classes.sheet}>
      <Group>
        <Group>
          <Avatar
            alt=""
            src="https://picsum.photos/250"
            className={classes.picture}
          />

          <Group className={classes.status}>
            <NumberInput
              label="Level"
              defaultValue={1}
              min={1}
              max={50}
              className={classes.lvl}
              hideControls
              variant="unstyled"
              value={status.lvl}
            />
            <NumberInput
              label="Experiência"
              defaultValue={0}
              min={0}
              className={classes.xp}
              hideControls
              variant="unstyled"
              value={status.exp}
              onChange={value => handleChange(value)}
            />
          </Group>
        </Group>

        <Group className={classes.charHead}>
          <TextInput
            className={classes.firstInfo}
            label="Nome"
            placeholder="Nome do personagem"
            variant="unstyled"
          />
          <TextInput
            className={classes.firstInfo}
            label="Ancestralidade"
            placeholder="Ancest. do personagem"
            variant="unstyled"
          />
          <TextInput
            className={classes.firstInfo}
            label="Vocação"
            placeholder="Vocação do personagem"
            variant="unstyled"
          />
          <TextInput
            className={classes.firstInfo}
            label="Servo Fiel"
            placeholder="Entidade adorada pelo personagem"
            variant="unstyled"
          />
        </Group>
      </Group>
    </Container>
  )
}

export default Sheet
