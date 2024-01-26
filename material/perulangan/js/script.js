const dataUsers = [
    {
        name : "Javier Kennedi",
        kelas : 11,
        alamat : "Jombang",
    },
    {
        name : "Joko",
        kelas : 15,
        alamat : "Bandung",
    },
    {
        name : "Wi",
        kelas : 19,
        alamat : "Jakarta",
    },
]
// console.log(dataUsers[0])
for(let i = 0; i < dataUsers.length; i++){
    // this is index on dataUsers
    // console.log(i)
    console.log('this section name : ',dataUsers[i].name)
    console.log('this section class : ',dataUsers[i].kelas)
    console.log('this section address : ',dataUsers[i].alamat)
}