
var vm = new Vue({
    el:'.main',
    data:{
        msg1:'本人自学本事强，善于思考，吃苦耐劳，有良好的沟通本事，善于与他人相处，富有团队合作精神，热爱运动。但人非完人，自我在某些方面还是有必须的不足，比如知识，社会经验等;可是我相信这些都是能够经过自我努力的学习来提高的，我也正朝着这个方向努力!能吃苦耐劳，愿从基层做起;以团体利益为第一原则，遵守公司的规章制度。(这段话是网上随便找的不要在意) <--另外左边是我的帅照',
        n:1
    },
    methods:{
        clickon : function(n){
            if(this.n>1)
            {
                this.n=1;
            }
            else
            {
                this.n++;
            }
        }
    }
})