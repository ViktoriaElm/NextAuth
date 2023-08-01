// скрипт "засевания" базы стартовыми данными
// запускается командой prisma db seed
// запускать только для пустой базы

import { PrismaClient } from '@prisma/client';
import json from '../server/db.json' assert { type: "json" };

const
  prisma = new PrismaClient();

for (const table in json) {
  console.log(table);
  if (prisma[table]) {
    try {
      await prisma[table].createMany({ data: json[table] });
    } catch (err) {
      console.error(err);
    }
  }
};

await prisma.$disconnect();