var tempo, valorIncial, taxa, valorAcumulado = 0;

tempo = Number(prompt("Vai investir por quantos meses?"));
valorInicial = Number(prompt("Vai investir quanto?"));
taxa = Number(prompt("Qual a taxa de juros? (1 para 1%)"));

valorAcumulado = valorInicial;
document.write('<table border="5px">');
document.write("<tr><th>Mês</th> <th>Valor</th></tr>");
for(var i = 0; i < tempo; i++){
	var juros = valorAcumulado * (taxa / 100);
	valorAcumulado = valorAcumulado + juros;
	var msg = "<tr>" +
    	"<td> Mês " + (i+1) + "</td>" +
    	"<td>" + valorAcumulado + "</td>";
    	"</tr>";
	document.write(msg);
}
document.write("</table>");
var t = valorAcumulado - valorInicial;
document.write("<h1>Total de Juros = " + t + "</h1>");