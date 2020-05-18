$(document).ready(function(){
    $('#eventSaya').click(function(){
        alert('hello sayang');
    })
    $('#bilanganPertama').keyup(function(){
        $('#tempPesan').text($(this).val());
    });
    $('#tombolTampil').click(function(){
        $('#kotak').hide('slow');
    });
    $('#tombolShow').click(function(){
        $('#kotak').show('slow');
    });
    $('#fadeOut').click(function(){
        $('#boxSatu').fadeOut('slow');
        $('#boxDua').fadeOut('normal');
        $('#boxTiga').fadeOut('fast');
    })
    $('#fadeIn').click(function(){
        $('#boxSatu').fadeIn('slow');
        $('#boxDua').fadeIn('normal');
        $('#boxTiga').fadeIn('fast');
    })
    
    $('#fadeTogle').click(function(){
        $('#boxSatu').fadeToggle('slow');
        $('#boxDua').fadeToggle('normal');
        $('#boxTiga').fadeToggle('fast');
    })
    $('#slideUp').click(function(){
        $('#boxEmpat').slideUp('slow');
    });
    
    $('#slideDown').click(function(){
        $('#boxEmpat').slideDown('slow');
    });

    $( "#kanan" ).click(function() {
        $( "#boxGerak" ).animate({
            right: "250px"
          }, 5000);
    });
})