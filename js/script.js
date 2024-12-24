$(function(){
    // X 회전 스크립트
    $('.trend-btn').hover(function(){ 
        $(this).closest('.trend-space').find('.trend-x').addClass('rotate-90')}, 
    function(){
        if (!$(this).closest('.trend-space').find('.trend-x').hasClass('rotate-135')){$(this).closest('.trend-space').find('.trend-x').removeClass('rotate-90')}
    }); 

    // 더보기 스크립트 
    $('.trend-after').hide().slideUp()
    $('.trend-btn').click(function(){
        $(this).closest('.trend-space').find('.trend-after').slideDown(function(){
            document.querySelectorAll('.trend-after .circle').forEach(circle => {
                const value = circle.getAttribute('data-value');
                const progress = circle.querySelector('.progress');
                const offset = 314 - (314 * value) / 100;
                setTimeout(() => {
                    progress.style.strokeDashoffset = offset;
                })
            })
        })
        $(this).closest('.trend-space').find('.trend-x').removeClass('rotate-90')
        .addClass('rotate-135')
    })
    // 더보기 닫기
    $('.trend-x').click(function(){
        $(this).closest('.trend-space').find('.trend-after').slideUp(function() {
            // 초기화 로직
            document.querySelectorAll('.trend-after .circle').forEach(circle => {
                const progress = circle.querySelector('.progress');
                progress.style.strokeDashoffset = 314; // 원래 상태로 초기화
            });
        })
        $(this).removeClass('rotate-135')
    })


// !---------------------------------------------------------S custom

        // X 회전 스크립트
        $('.custom-btn').hover(function(){ 
            $(this).closest('.custom-space').find('.custom-x').addClass('rotate-90')}, 
        function(){
            if (!$(this).closest('.custom-space').find('.custom-x').hasClass('rotate-135')){$(this).closest('.custom-space').find('.custom-x').removeClass('rotate-90')}
        }); 
    
        // 더보기 스크립트 
        $('.custom-after').hide().slideUp()
        $('.custom-btn').click(function(){
            $(this).closest('.custom-space').find('.custom-after').slideDown(function(){
                document.querySelectorAll('.custom-after .circle').forEach(circle => {
                    const value = circle.getAttribute('data-value');
                    const progress = circle.querySelector('.progress');
                    const offset = 314 - (314 * value) / 100;
                    setTimeout(() => {
                        progress.style.strokeDashoffset = offset;
                    })
                })
            });
            $(this).closest('.custom-space').find('.custom-x').removeClass('rotate-90').addClass('rotate-135')
        })
        // 더보기 닫기
        $('.custom-x').click(function(){
            $(this).closest('.custom-space').find('.custom-after').slideUp(function() {
                // 초기화 로직
                document.querySelectorAll('.custom-after .circle').forEach(circle => {
                    const progress = circle.querySelector('.progress');
                    progress.style.strokeDashoffset = 314; // 원래 상태로 초기화
                });
            })
            $(this).removeClass('rotate-135')
        })
})

