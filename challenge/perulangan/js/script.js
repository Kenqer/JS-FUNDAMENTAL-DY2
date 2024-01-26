const dataUsers = [
    {
        name : "Javier Kennedi",
        kelas : 11,
        alamat : "Jombang",
    },
    {
        name : "Joko",
        kelas : 9,
        alamat : "Bandung",
    },
    {
        name : "Wi",
        kelas : 1,
        alamat : "Jakarta",
    },
]
// console.log(dataUsers[0])
    for(let i = 0; i < dataUsers.length; i++){
        // this is index on dataUsers
        // console.log(i)
        while(dataUsers[i].kelas < 10){
            console.log(dataUsers[i])
            break
        }
    
}

