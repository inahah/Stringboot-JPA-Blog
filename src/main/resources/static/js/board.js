let index = {
	init: function() {
		$("#btn-save").on("click", () => { 
		});
		},

	save: function() {
		let data = {
			title: $("#title").val(),
			content: $("#content").val(),
		};

		$.ajax({ 
			type: "POST",
			url: "/api/board",
			data: JSON.stringify(data), 
			contentType: "application/json; charset=utf-8", 
			dataType: "json" 
		}).done(function(resp) {
			alert("글쓰기가 완료되었습니다.");
			location.href = "/";
		}).fail(function(error) {
			alert(JOSN.stringify(error));
		});
	},
	
	// login: function() {
	// 	//alert('user의 save함수 호출됨');
	// 	let data = {
	// 		username: $("#username").val(),
	// 		password: $("#password").val(),
	// 	};

	// 	$.ajax({ 
	// 		type: "POST",
	// 		url: "/api/user/login",
	// 		data: JSON.stringify(data), // http body데이터
	// 		contentType: "application/json; charset=utf-8", // body데이터가 어떤 타입인지(MIME)
	// 		dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기존적으로 모든 것이 문자열(생긴게 json이라면) => javascript오브젝트로 변경
	// 	}).done(function(resp) {
	// 		alert("로그인이 완료되었습니다.");
	// 		location.href = "/";
	// 	}).fail(function(error) {
	// 		alert(JOSN.stringify(error));
	// 	});
	// }
}

index.init();