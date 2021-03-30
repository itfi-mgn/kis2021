// ФИКСИРОВАНИЕ МЕНЮ
    $(function() {        
        var menu = $('ul.menu'),
            menuTop = menu.position().top + parseInt(menu.css("margin-top")),
            consult_close = false;
            
        $('a.consult-close').click(function(){
            $('#consult').stop(true, false).animate({"right": "-300px"}, 200);
            consult_close = true;
            return false;
        });  

        $(window).scroll(function(){
            var winTop = $(window).scrollTop(),
				header = $('.scrolling'),
				headerheight = header.height(),
				left = $('.left .scr'),
				scroll_down = $('.scrolling-down').offset().top;
            
            if (!consult_close) {
                if ($(window).scrollTop() >= $(document).height() - $(window).height() - 250) {
                        $('#consult').stop(true, false).animate({"right": "0px"}, 200);
                } else {
                        $('#consult').stop(true, false).animate({"right": "-300px"}, 200);
                }
            }

            if (winTop > 230) {
                $('body').addClass('fbg');
            } else {
                $('body').removeClass('fbg');
            }

            if (winTop > menuTop) {
                menu.addClass('fixed');
                $('.up').show();
            } else {
                menu.removeClass('fixed');
                $('.up').hide();
            }
			
//			if ($('.left .scr').height() < $('.content').height()) {
//			
//				if (winTop > headerheight) {
//					left.addClass('fixed');
//				} else {
//					left.removeClass('fixed');
//				}
//
//				if ($('.left .scr').height() + winTop > scroll_down - 20) {
//					left.addClass('absolute');
//					left.css('top', 'auto');
//				} else {
//					left.removeClass('absolute');
//					left.css('top', '60px');
//				}
//				
//			}
			
        });
		
		$('.zakon-side-menu h5').click(function(){
			if ($(this).next('div').is(':visible')) {
				$('.zakon-side-menu h5').removeClass('noact');
				$('.zakon-side-menu .block-left').show();
				$(this).addClass('noact');
				$(this).next('div').hide();
			} else {
				$('.zakon-side-menu h5').addClass('noact');
				$('.zakon-side-menu .block-left').hide();
				$(this).removeClass('noact');
				$(this).next('div').show();
			}
		})
        
        $('.up').click(function(){
            $('html, body').animate({ scrollTop: '0px' })
            return false;
        })
        
        $('.more-popular').click(function(){
            if ($('#more-popular').is(':hidden')) {
                $(this).addClass('selected');
                $('#more-popular').show();
            } else {
                $(this).removeClass('selected');
                $('#more-popular').hide();
            }
            return false;
        })
        
        $('.close').click(function(){
            $('.more-popular').trigger('click');
            return false;
        })
        
        $(document).click(function(){
            if ($('#more-popular').is(':visible')) {
                $('.more-popular').removeClass('selected');
                $('#more-popular').hide();
            }
        })
		
    });


// COMBOBOX SELECT
    $(function() {
        $('select').combobox()
    });

// ФУНКЦИЯ AUTOCOMPLETE для поисковой строки в header
    $(function() {
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        $( "#tags" ).autocomplete({
            source: availableTags
        });
    });
// Конец скрипта

//Облако тегов
	$.fn.tagcloud.defaults = {
      size: {start: 10, end: 25, unit: 'px'},
	  color: {start: '#f8600d', end: '#3086be'}
    };

	$(function(){
		$('#news-by-theme a[data-size]').tagcloud();
        $('#more-popular a[data-size]').tagcloud({color: {start: '#ffffff', end: '#ffffff'}, size: {start: 11, end: 20, unit: 'px'}});
	});

// создание массива тегов
            var word_list = [
                {text:"Lorem", weight:13, link:"#"},
                {text:"Ipsum", weight:10.5, link:"#"},
                {text:"Тэг-3", weight:9.4, link:"#"},
                {text:"Тэг-4", weight:8, link:"#"},
                {text:"Тэг-Тэг-5", weight:6.2, link:"#"},
                {text:"Тэг-Тэг-Тэг-6", weight:5, link:"#"},
                {text:"Тэг-7", weight:5,link:"#"},
                {text:"Тэг", weight:5,link:"#"},
                {text:"Тэг-9", weight:5,link:"#"}
            ];
           // $(function () {
           //     $("#news-by-theme").jQCloud(word_list);
           // });

// Конец скрипта

//  КАЛЕНДАРЬ DATEPICKER
		var d = new Date(),
			month = d.getMonth() + 1,
			year = d.getFullYear();
	
        $(function() {
            $("#datepicker").datepicker({
				dateFormat: "yy-mm-dd",
				onSelect: function (dateText){
					document.location.href = "/buhCalendar/date/" + dateText;
				},
				onChangeMonthYear: function(year, month){
					loadCalendar(month, year);
				}
			});
			
			loadCalendar(month, year);
			
			function loadCalendar(month, year) {
				$.ajax({
					type: "POST",
					url: "/buhCalendar/events/",
					dataType: 'json',
					data: { 'month': month, 'year': year }
				  }).done(function(json) {
						if (json.success) {
							$.each(json.success, function(index, value){
								$('#datepicker a').each(function(){
									if ($(this).text() == value)
										$(this).addClass('ui-state-event');
								})
							})
						}
				  });
				}
        });

        $(function() {
            $( "#datepicker-1" ).datepicker();
        });
		
		
$(function() {
	$('table.bc').each(function(){
		if ($(this).width() > 918)
			$(this).replaceWith('<div class="overtable">' + $(this).context.outerHTML + '</div>')
	})
});

// ИЗМЕНЕНИЕ ВНЕШНЕГО ВИДА RADIOBUTTON

jQuery(document).ready(function(){
 
jQuery(".niceRadio").each(
/* при загрузке страницы меняем обычные на стильные radio */
function() {
      
     changeRadioStart(jQuery(this));
      
});
 
 
});
 
 
function changeRadio(el)
/* 
    функция смены вида и значения radio при клике на контейнер
*/
{
 
    var el = el,
        input = el.find("input").eq(0);
    var nm=input.attr("name");
         
    jQuery(".niceRadio input").each(
     
    function() {
      
        if(jQuery(this).attr("name")==nm)
        {
            jQuery(this).parent().removeClass("radioChecked");
        }
        
        
    });                   
     
     
    if(el.attr("class").indexOf("niceRadioDisabled")==-1)
    {   
        el.addClass("radioChecked");
        input.attr("checked", true);
    }
     
    return true;
}
 
function changeVisualRadio(input)
{
/*
    меняем вид radio при смене значения
*/
    var wrapInput = input.parent();
    var nm=input.attr("name");
         
    jQuery(".niceRadio input").each(
     
    function() {
      
        if(jQuery(this).attr("name")==nm)
        {
            jQuery(this).parent().removeClass("radioChecked");
        }
        
        
    });
 
    if(input.attr("checked")) 
    {
        wrapInput.addClass("radioChecked");
    }
}
 
function changeRadioStart(el)
/* 
    новый контрол выглядит так <span class="niceRadio"><input type="radio" name="[name radio]" id="[id radio]" [checked="checked"] /></span>
    новый контрол получает теже name, id и другие атрибуты что и были у обычного
*/
{
 
try
{
var el = el,
    radioName = el.attr("name"),
    radioId = el.attr("id"),
    radioChecked = el.attr("checked"),
    radioDisabled = el.attr("disabled"),
    radioTab = el.attr("tabindex"),
    radioValue = el.attr("value");
    if(radioChecked)
        el.after("<span class='niceRadio radioChecked'>"+
            "<input type='radio'"+
            "name='"+radioName+"'"+
            "id='"+radioId+"'"+
            "checked='"+radioChecked+"'"+
            "tabindex='"+radioTab+"'"+
            "value='"+radioValue+"' /></span>");
    else
        el.after("<span class='niceRadio'>"+
            "<input type='radio'"+
            "name='"+radioName+"'"+
            "id='"+radioId+"'"+
            "tabindex='"+radioTab+"'"+
            "value='"+radioValue+"' /></span>");
     
    /* если контрол disabled - добавляем соответсвующий класс для нужного вида и добавляем атрибут disabled для вложенного radio */    
    if(radioDisabled)
    {
        el.next().addClass("niceRadioDisabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
    }
     
    /* цепляем обработчики стилизированным radio */    
    el.next().bind("mousedown", function(e) { changeRadio(jQuery(this)) });
    if(jQuery.browser.msie) el.next().find("input").eq(0).bind("click", function(e) { changeVisualRadio(jQuery(this)) });   
    else el.next().find("input").eq(0).bind("change", function(e) { changeVisualRadio(jQuery(this)) });
    el.remove();
}
catch(e)
{
    // если ошибка, ничего не делаем
}
 
    return true;
}

// SLIDER LIST-DATE
    $(function(){
        if ($("#slides").length > 0) 
            $("#slides").slides(); // контейнер с элементами слайдера
    });

// Конец скрипта

function moveTip(e) {
  if (document.getElementById("floatTip")!=null){
	offset = document.getElementById("main");
	floatTipStyle = document.getElementById("floatTip").style;
	w = 250; // Ширина слоя

	x = e.pageX - offset.offsetLeft;
	y = e.pageY - offset.offsetTop;


	// Показывать слой справа от курсора
	if ((x + w + 20) < document.body.clientWidth) {
	  floatTipStyle.left = x + 20 + 'px';

	// Показывать слой слева от курсора
	} else {
	  floatTipStyle.left = x - w - 20 + 'px';
	}
	// Положение от верхнего края окна браузера
	floatTipStyle.top = y + 20 + 'px';
  }
}

function toolTip(msg) {
document.onmousemove = moveTip;
  if (document.getElementById("floatTip")!=null){
      floatTipStyle = document.getElementById("floatTip").style;
      if (msg) {
        // Выводим  текст подсказки
        document.getElementById("floatTip").innerHTML = document.getElementById("part_"+msg).innerHTML;
        floatTipStyle.display = "block"; // Показываем слой
      } else {
        floatTipStyle.display = "none"; // Прячем слой
      }
  }
}