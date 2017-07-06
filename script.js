
window.addEventListener("load", function()
{
	//APAGANDO TUDO QUE ESTIVER NO CAMPO
	var ac = document.getElementById("ac");
	ac.addEventListener("click", function()
	{
		document.getElementById("campo").value = "";
	}, false);

	//CALCULANDO A RAIZ QUADRADA
	var sqrt = document.getElementById("sqrt");
	sqrt.addEventListener("click", function()
	{
		var camp = document.getElementById("campo").value;
		document.getElementById("campo").value = "";  
		document.getElementById("campo").value = Math.sqrt(camp);

	}, false);
	
	//APAGAR O ULTIMO VALOR DO CAMPO
	var apagar = document.getElementById("ap");
	apagar.addEventListener("click", function()
	{
		var campo = document.getElementById("campo").value; 
		document.getElementById("campo").value = campo.substring(0, campo.length - 1);
		
	},false);
	
	var operacao;
	var num1,
		num2,
		num3;
	
	//SOMANDO
	var soma = document.getElementById("s");
	soma.addEventListener("click", function()
	{
		operacao = 1;
		num1 = document.getElementById("campo").value; 
		document.getElementById("campo").value = ""; 
		
	},false);
	
	//SUBTRAINDO
	var sub = document.getElementById("m");
	sub.addEventListener("click", function()
	{
		operacao = 2;
		num1 = document.getElementById("campo").value; 
		document.getElementById("campo").value = ""; 
		
	},false);
	
	//MULTIPLICANDO
	var mult = document.getElementById("M");
	mult.addEventListener("click", function()
	{
		operacao = 3;
		num1 = document.getElementById("campo").value; 
		document.getElementById("campo").value = ""; 
		
	},false);
	
	//DIVIDINDO
	var dividir = document.getElementById("d");
	dividir.addEventListener("click", function()
	{
		operacao = 4;
		num1 = document.getElementById("campo").value; 
		document.getElementById("campo").value = ""; 
		
	},false);
	
	//MODULO
	var mod = document.getElementById("mo");
	mod.addEventListener("click", function()
	{
		operacao = 5;
		num1 = document.getElementById("campo").value; 
		document.getElementById("campo").value = ""; 
		
	},false);
	
	// CASO O CAMPO ESTIVER VAZIO E USER CLICAR NO BTAO DE CASAS DEC
	var virgula = document.getElementById("v");
	virgula.addEventListener("click", function()
	{
		
		var campo = document.getElementById("campo").value; 
		 if(campo == "")
		 {
			 num1 = document.getElementById("campo").value = "0.";
		 }
		 else if(!campo == "")
		 {
			 //VERIFICAR SOBRE A CONCATENACAO DE PONTOS
			 var valor = document.getElementById("campo").value += this.value;
			 
		 }
		 
		
	},false);
	
	
	//CALCULANDO OS NUMEROS
	var igual = document.getElementById("i");
	igual.addEventListener("click", function()
	{
		num2 = document.getElementById("campo").value;
		
		if( operacao == 1 )
		{
			document.getElementById("campo").value = parseFloat(num1) + parseFloat(num2);
		} 
		else if( operacao == 2 )
		{
			document.getElementById("campo").value = parseFloat(num1) - parseFloat(num2);
		}
		else if( operacao == 3 )
		{
			document.getElementById("campo").value = parseFloat(num1) * parseFloat(num2);
		}
		else if( operacao == 4 )
		{
			document.getElementById("campo").value = parseFloat(num1) / parseFloat(num2);
		}
		else if( operacao == 5 )
		{
			document.getElementById("campo").value = parseFloat(num1) % parseFloat(num2);
		}
		
	},false);
				
			
}, false);




	//FUNCAO PRA PREENHER OS VALORES NO CAMPO
	function preenche(valor)
	{
		var campo = document.getElementById("campo");
		
		//pega o valor atual do elemento
		var value = campo.value;
		var caracteres = value.length;
		 
		 /*----- Limitar o numero de caracteres no campo ------*/
		if (caracteres < 8) 
			{
				//pega o valor atual e soma com a valor que esta a ser acrescentado
				campo.value = value+valor;
			};

	}

