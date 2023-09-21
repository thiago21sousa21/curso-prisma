import prisma from "./database"

const defaultUser = async()=>{
    const user = await prisma.customer.findUnique({
        where:{
            document: "133.245.497-60"
        }
    })
    if(!user)await prisma.customer.create({
        data:{
            firstName: "Geraldo",
            lastName: "Luiz Datena",
            document: "133.245.497-60"
        }
    })
}

defaultUser().then(()=>{
    console.log('defaultuser OK')
}).catch(e=>{
    console.log(e);
})