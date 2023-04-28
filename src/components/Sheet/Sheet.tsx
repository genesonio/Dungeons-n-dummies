import {
  Container,
  Group,
  NumberInput,
  Stack,
  TextInput,
  Textarea
} from "@mantine/core"

import {Avatar} from "../Avatar"

import useStyles from "./Sheet.style"

const Sheet = () => {
  const {classes} = useStyles()

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
            />
            <NumberInput
              label="Experiência"
              defaultValue={0}
              min={0}
              className={classes.xp}
              hideControls
              variant="unstyled"
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
