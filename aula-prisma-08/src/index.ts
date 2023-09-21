import prisma from "./database";

const test = async () => {
  const students = await prisma.student.groupBy({
    by:["class"],
    _count: {class:true}
  }); // TODO: Faça a implementação aqui
  console.log(students);

  const desempregados = await prisma.student.groupBy({
    by:["class"],
    _count:true,
    where:{ jobId:{equals:null}}
  })

  console.log(desempregados)

}

test();