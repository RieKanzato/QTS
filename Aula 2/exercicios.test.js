import {
    assert,
    assertEquals,
    assertNotEquals,
    assertOk,
    assertStringIncludes
} from "https://deno.land/std@0.217.0/assert/mod.ts"

let a = 'oi'
let b = 'oioi'
let c = 'oiii'

Deno.test("Teste com assert", () => {
    assert(a === "oioi", "'a' não é 'oioi'");
    console.log(`Passou! '${a}' é igual a 'oi'`);
});

Deno.test("teste assertEquals", () => {
    assertEquals(b, 'oioi');
    console.log(`Passou! '${b}' é igual a 'oioi'`)
});

Deno.test("Teste assertNotEquals ", ()=> {
    assertNotEquals(c, "'c' não é igual à 'oi'");
    console.log(`Passou! '${c}' e '${b}' não são iguais`)
});

