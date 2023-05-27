import { z } from "zod";


import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const sheetRouter = createTRPCRouter({
  createSheet: publicProcedure
    .input(z.object({ 
      avatar:z.string(),
      name:z.string(),
      race:z.string(),
      stats:z.object({
        hp:z.number(),
        sp:z.number(),
        currentHp:z.number(),
        currentSp:z.number(),
        str:z.number(),
        dex:z.number(),
        int:z.number(),
        cha:z.number()
      }),
        exp:z.number(),
        level:z.number(),
        role:z.string(),
      skills:z.object({
        id:z.string(),
        name:z.string(),
        type:z.string(),
        attribute:z.string().nullish(),
        effect:z.string().nullish(),
        description:z.string().nullish(),
        free:z.boolean()
      }).array(),
      backpack:z.object({
        id:z.string(),
        name:z.string(),
        quantity:z.number(),
        description:z.string().optional(),
        stat:z.union([z.string().optional(), z.number().optional()]),
        modifier:z.union([z.string().optional(), z.number().optional()]),
      }).array(),
      armor:z.object({
        id:z.string(),
        name:z.string(),
        quantity:z.number(),
        description:z.string().optional(),
        stat:z.union([z.string().optional(), z.number().optional()]),
        modifier:z.string().optional(),
      }).array(),
      divinity:z.string().optional()
    }))
    .mutation( async ({ ctx, input }) => {
      const sheet = await ctx.prisma.character.create({
        data:{
          avatar:input.avatar,
          name:input.name,
          race: input.race,
          stats:[
            input.stats.hp,
            input.stats.sp,
            input.stats.currentHp,
            input.stats.currentSp,
            input.stats.str,
            input.stats.dex,
            input.stats.int,
            input.stats.cha,
          ],
          exp:input.exp,
          level:input.level,
          role:input.role,
          skills:input.skills,
          backpack:input.backpack,
          armor: input.armor,
          divinity:input.divinity,
          author: {
            connect:{id:ctx.session?.user?.id}
          } 
        }
      })
      console.log("Sheet saved!")
      return sheet
    }),

  deleteSheet:publicProcedure.input(z.object( {id:z.string()}))
  .mutation( async ({ ctx, input }) =>{
    await ctx.prisma.character.delete({where: {id: input.id} })
    console.log(" Character " + input.id + " killed with success.")
  }),

  deleteAllSheets:publicProcedure.mutation( async ({ ctx }) => {
    const {count} = await ctx.prisma.character.deleteMany({
      where:{
        author:{id:ctx.session?.user?.id}
      }
    })
    console.log(count + "were killed in this genocide, successful mass delete")
  }),

  updateSheet: publicProcedure
  .input(z.object({
    id:z.string(),
    avatar:z.string(),
    name:z.string(),
    race:z.string(),
    stats:z.object({
      hp:z.number(),
      sp:z.number(),
      currentHp:z.number(),
      currentSp:z.number(),
      str:z.number(),
      dex:z.number(),
      int:z.number(),
      cha:z.number()
    }),
      exp:z.number(),
      level:z.number(),
      role:z.string(),
    skills:z.object({
      id:z.string(),
      name:z.string(),
      type:z.string(),
      attribute:z.string().nullish(),
      effect:z.string().nullish(),
      description:z.string().nullish(),
      free:z.boolean()
    }).array(),
    backpack:z.object({
      id:z.string(),
      name:z.string(),
      quantity:z.number(),
      description:z.string().optional(),
      stat:z.union([z.string().optional(), z.number().optional()]),
      modifier:z.union([z.string().optional(), z.number().optional()]),
    }).array(),
    armor:z.object({
      id:z.string(),
      name:z.string(),
      quantity:z.number(),
      description:z.string().optional(),
      stat:z.union([z.string().optional(), z.number().optional()]),
      modifier:z.string().optional(),
    }).array(),
    divinity:z.string().optional()
  }))
  .mutation( async ({ ctx, input }) => {
    const sheet = await ctx.prisma.character.update({
      where:{id:input.id},
      data:{
        avatar:input.avatar,
        name:input.name,
        race: input.race,
        stats:[
          input.stats.hp,
          input.stats.sp,
          input.stats.currentHp,
          input.stats.currentSp,
          input.stats.str,
          input.stats.dex,
          input.stats.int,
          input.stats.cha,
        ],
        exp:input.exp,
        level:input.level,
        role:input.role,
        skills:input.skills,
        backpack:input.backpack,
        armor: input.armor,
        divinity:input.divinity,
        author: {
          connect:{id:ctx.session?.user?.id}
        } 
      }
    })
    return sheet;
  }),

  getSheet:publicProcedure.input(z.object({id:z.string()}))
  .query( async ({ ctx, input }) =>{
    const sheet = await ctx.prisma.character.findUnique({
      where:{
        id:input.id
      }
    })
    return sheet;
  }),

  getSheetList:publicProcedure.query( async ({ ctx }) =>{
    const sheet = await ctx.prisma.character.findMany({
      where:{
        author:{id:ctx.session?.user?.id}
      }
    })
    return sheet;
  }),
});
