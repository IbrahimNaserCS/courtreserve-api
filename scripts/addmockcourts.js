const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const courtNames = ["Maplewood Courts","Sunset Racket Club","Birchview Tennis Pavilion","Lakeside Smash Center","Greenridge Tennis Park","Summit Clay Grounds","Pinecrest Tennis Complex","Riverbend Racket Arena","Hilltop Tennis Reserve","Golden Ace Tennis Courts"];

async function addCourts(courts) {
    for (const court of courts) {
        await prisma.court.create({
            data: {
                name: court
            }
        });
    }
}

addCourts(courtNames);
console.log("Added courts!");

