import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcryptjs";
const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    where: { email: 'andre@gmail.com' },
    update: {},
    create: {
      name: 'Andre Lucas',
      email: 'andre@gmail.com',
      password: hashSync('Al154263789@', 8)
    }
  });

  await prisma.operation.upsert({
    where: { name: 'Pix' },
    update: {},
    create: {
      name: 'Pix'
    },
  });
  
  await prisma.operation.upsert({
    where: { name: 'Débito' },
    update: {},
    create: {
      name: 'Debito'
    },
  });
  
  await prisma.operation.upsert({
    where: { name: 'Cartão' },
    update: {},
    create: {
      name: 'Cartão'
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });