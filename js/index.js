$(document).ready(function() {

        $(".tabbox li").click(function () {
            //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
            $(this).addClass("active").siblings().removeClass("active");
            //获取选中元素的下标
            var index = $(this).index();
            $(this).parent().siblings().children().eq(index).addClass("active")
                .siblings().removeClass("active");
            $('.content').slideDown("slow");
        });
        $("#back-to-top").hide();
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function() {
          $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
              $("#back-to-top").fadeIn(750);
            } else {
              $("#back-to-top").fadeOut(750);
            }
          });
          //当点击跳转链接后，回到页面顶部位置
          $("#back-to-top").click(function() {
            $('body,html').animate({
              scrollTop: 0
            },
            1000);
            return false;
          });
        });
})