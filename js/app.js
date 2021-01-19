var myApp = angular.module("myApp",[])
myApp.controller("myCtrl",function($scope){
    var products = [
        {name :"Ghế Sofa cao cấp L61A",src:"./images/sp_1.jpg",storage:"Chỉ còn 3 sản phẩm",price:18499000,discount:50,sale:9249500,date:new Date('12/10/2020'),describe:"Da công nghiệp nhập khẩu Hàn Quốc. Dài 2,4m rộng 1,6m.Chân ghế nhựa đúc.Khung dầu gỗ."},
        {name :"Sofa phòng khách L59",src:"./images/sp_2.jpg",storage:"Chỉ còn 10 sản phẩm",price:20500000,discount:30,sale:14350000,date:new Date('02/1/2019'),describe:"Da công nghiệp nhập khẩu Đài Loan. Dài 3,1m rộng 1,8m.Chân ghế nhựa đúc.Khung dầu gỗ đẫ xử lý chống mối."},
        {name :"Sofa da bò nhập khẩu ZL-175",src:"./images/sp_3.jpg",storage:"Chỉ còn 3 sản phẩm",price:90000000,discount:45,sale:49500000,date:new Date('3/10/2018'),describe:"Da bò thật 100%, da nhập Malaysia,Italian,Brasil. Khung gỗ sồi, lò xo 5 lớp, bao nhúng."},
        {name :"Ghế sofa vải cao cấp LF-07",src:"./images/sp_4.jpg",storage:"Chỉ còn 8 sản phẩm",price:22500000,discount:25,sale:16875000,date:new Date('1/12/2020'),describe:"Vải bố nhập khẩu Hàn Quốc. Dài 3,1m rộng 1,8m.Nệm mút cao su non kết hợp lò xo đàn hồi tốt, mang lại cảm giác êm ái dể chịu"},
        {name :"Ghế sofa da góc chữ L Z3092",src:"./images/sp_5.jpg",storage:"Chỉ còn 2 sản phẩm",price:25500000,discount:52,sale:12240000,date:new Date('10/11/2020'),describe:"Khung sofa: gỗ dầu. Chân ghế: INOX. Simili Hàn Quốc. Nệm cao su non."},
        {name :"Sofa phòng khách Z5",src:"./images/sp_6.jpg",storage:"Chỉ còn 6 sản phẩm",price:12900000,discount:3,sale:12513000,date:new Date('8/3/2019'),describe:"Sofa giá rẻ Z5 là mẫu mới được khách hàng tin tưởng và bán chạy nhất trong tháng vừa qua. Mẫu sofa Z5 được sử dụng khung gỗ với tính chất dầu tự nhiên đã qua xử lý, vì vậy nó có khả năng chống mọt và ẩm mốc"}
    ]
    $scope.products=products;
    $scope.sortColumn = 'name';
    $scope.reverse = false;
    
    $scope.sortData = function(column){
        if($scope.sortColumn==column){
            $scope.reverse=!$scope.reverse;
        }
        else{
            $scope.reverse=false;
        }
        $scope.sortColumn=column;
    }

    $scope.categoryview = "table.html";
    $scope.view = function(view){
        $scope.categoryview=view;
    }
});