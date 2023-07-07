$(function(){

	$('.nav a[href^="#"]').on('click', function(e) {
	  e.preventDefault();
	  var id = $(this).attr('href'),
	  targetOffset = $(id).offset().top;
	    
	  $('html, body').animate({ 
	    scrollTop: targetOffset - 100
	  }, 500);
	})

	var indiceAtual = 0
	var indiceMaximo = $('.descricao-chamada').length;
	var delay = 6000;

	initSlider();
	function initSlider() {
		$('.descricao-chamada').eq(0).fadeIn();
		setInterval(function(){
			alternarSlider();
		},delay);
	}

	function alternarSlider() {
		$('.descricao-chamada').eq(indiceAtual).hide();
		indiceAtual+=1;
		if (indiceAtual == indiceMaximo)
			indiceAtual = 0;
		$('.descricao-chamada').eq(indiceAtual).fadeIn(3000);
	}

	$('.mobile').click(function() {
		$('.mobile').find('ul').slideToggle();

		$('body').click(function() {
		$('body').remove('ul');
	})

	})

	/************ Slider Projetos **************/


	var amtProjeto = $('.projetos-wraper1').length;
    var curIndex = 0;

	iniciarProjeto();
    navegarProjeto();

        function iniciarProjeto(){
            $('.projetos-wraper1').hide();
            $('.projetos-wraper1').eq(0).fadeIn();
        }

        function navegarProjeto(){
            $('[next]').click(function(){
                 curIndex++;
                 if(curIndex >= amtProjeto)
                    curIndex = 0;
                $('.projetos-wraper1').hide();
                $('.projetos-wraper1').eq(curIndex).fadeIn();
                console.log('funcionando');
                
            })

            $('[prev]').click(function(){
                curIndex--;
                 if(curIndex < 0)
                    curIndex = amtProjeto-1;
                $('.projetos-wraper1').hide();
                $('.projetos-wraper1').eq(curIndex).fadeIn(0);
                console.log('funcionando');
            })
        }

        /***************** eventos form *******************/

        $('input[type=text]').focus(function(){
		resetarCampoInvalido($(this));
	})

	$('.form1').submit(function(e){
		//e.preventDefault();
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();

		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
			return false;
		}else if(verificarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'));
			return false;
		}else if(verificarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
			return false;
		}else{
			alert("O formulário foi enviado!");
		}
	})

	//FUNÇÕES PARA ESTILIZAR O CAMPO DO FORMULÁRIO

	function aplicarCampoInvalido(el){
		el.css('color','red');
		el.css('border','2px solid red');
		el.val('Campo Inválido!')
	}

	function resetarCampoInvalido(el){
		el.css('color','black');
		el.css('border','1px solid #ccc');
		el.val('');
	}

	//FUNÇÕES PARA VERIFICAR OS CAMPOS DO FORMULÁRIO

	function verificarNome(nome){
		//contando a quantidade de espaços e seus valores

		if(nome == ''){
			return false;
		}

	}

	function verificarTelefone(telefone){
			if(telefone == ''){
			return false;
		}

		if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
			return false;
		}

	}

		function verificarEmail(email){
			if(email == ''){
				return false;
			}

		if(email.match(/^([a-z0-9_.]{1,})+@+([a-z.]{1,})$/) == null){
			return false;
		}
	}

});