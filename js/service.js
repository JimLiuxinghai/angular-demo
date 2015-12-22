/*公用方法*/
app.service('baseService',[function()
{
    this.x_get_data = function(url)
    {
        var data = '';
        $.ajax(
            {
                type:"get",
                dataType:"json",
                url:url,
                async:false,
                success:function(msg){
                    if(msg!=null&&msg!=""){//请求action成功时
                        data = msg;

                        console.log("请求成功")
                    }
                    else{//请求action失败时，
                        console.log("获取到的数据为空");
                    }
                },
                error:function(){
                    console.log("请求失败");
                }

            }
        )

        return data;
    }
    this.getUrl = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
        {
            return unescape(r[2]);
        }
        else
        {
            return null;
        }
    }
}])