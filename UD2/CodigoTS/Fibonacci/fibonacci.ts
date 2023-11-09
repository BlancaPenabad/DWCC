/* Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte:
• 10 primeiros números da sucesión de Fibonacci.
• Indicar se un número é primo ou non. A entrada de datos podes facela como queiras
(prompt, fixa,...)
 */

function fib(n:number):number[]{

    let nums=[0,1];
    let i;
    for(i=2; i<n; i++){
        nums[i] = nums[i-2] + nums[i-1];
    }
    return nums;

}
console.log(fib(10));