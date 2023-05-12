import { z } from "zod"


import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc"

export const sheetRouter = createTRPCRouter( {
  createSheet: publicProcedure
    .input( z.object( {
      avatar: z.string(),
      name: z.string(),
      race: z.string(),
      stats: z.object( {
        hp: z.number(),
        sp: z.number(),
        currentHp: z.number(),
        currentSp: z.number(),
        str: z.number(),
        dex: z.number(),
        int: z.number(),
        cha: z.number()
      } ),
      level: z.object( {
        exp: z.number(),
        level: z.number()
      } ),
      role: z.string(),
      skills: z.object( {
        id: z.string(),
        name: z.string(),
        type: z.string(),
        attribute: z.string().nullish(),
        effect: z.string().nullish(),
        description: z.string().nullish(),
        free: z.boolean()
      } ).array(),
      backpack: z.object( {
        id: z.string(),
        name: z.string(),
        quantity: z.string(),
        description: z.string().nullish(),
        stat: z.string().nullish() || z.number().nullish(),
      } ).array(),
      armor: z.object( {
        id: z.string(),
        name: z.string(),
        quantity: z.string(),
        description: z.string().nullish(),
        stat: z.string().nullish() || z.number().nullish(),
      } ),
      divinity: z.string().nullish()
    } ) )
    .mutation( async ( { ctx, input } ) => {
      const sheet = await ctx.prisma.character.create( {
        data: {
          avatar: input.avatar,
          name: input.name,
          race: input.race,
          stats: {
            hp: input.stats.hp,
            sp: input.stats.sp,
            currentHp: input.stats.currentHp,
            currentSp: input.stats.currentSp,
            str: input.stats.str,
            dex: input.stats.dex,
            int: input.stats.int,
            cha: input.stats.cha,
          },
          level: {
            exp: input.level.exp,
            level: input.level.level,
          },
          role: input.role,
          skills: input.skills,
          backpack: input.backpack,
          armor: input.armor,
          divinity: input.divinity,
          author: {
            connect: { id: ctx.session?.user?.id }
          }
        }
      } )
      console.log( "Sheet saved!" )
      return sheet
    } )


} )
