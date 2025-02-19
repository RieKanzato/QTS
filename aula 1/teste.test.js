    let a = 'oi'
    let b = 'olá'

    Deno.test("teste do oi ", () => {
        if (a != "oi") {
            throw new Error(`${a} nãe é oi`);
        } else{
            console.log(`${a} é de fato o oi`);
        }
    })

    Deno.test("não pode ser oi ", () => {
        if (b == "oi") {
            throw new Error(`${a} é o oi, portanto está errado`);
        } else {
            console.log(`${b} não é o oi, portanto está certo`);
        }
    })