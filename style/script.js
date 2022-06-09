function switchContents(e) {
    // クリックされたエレメントを取得
	let clickedTarget = e.target;
    while (!clickedTarget.className.includes("switch-active")) {
        // switch-activeで指定されたクラスでない場合、親クラスを見に行く
		clickedTarget = clickedTarget.parentElement;

		if (clickedTarget == null) return;
	}

	disactiveTarget = clickedTarget.parentElement.getElementsByClassName("switch-disactive")[0];

    // 表示クラスの切り替え
	clickedTarget.classList.replace("switch-active", "switch-disactive");
	disactiveTarget.classList.replace("switch-disactive", "switch-active");
}

function initSwitch() {
	// switch-before classのタグを表示
	const switchBefores = document.getElementsByClassName('switch-before');
	for(let i = 0; i < switchBefores.length; i++){
		switchBefores[i].classList.add("switch-active");
	}

	// switch-after classのタグを非表示
	const switchAfters = document.getElementsByClassName('switch-after');
	for(let i = 0; i < switchAfters.length; i++){
		switchAfters[i].classList.add("switch-disactive");
	}

	// switch classにイベントリスナーを登録
	const switchs = document.getElementsByClassName('switch');
	for(let i = 0; i < switchBefores.length; i++){
		// switchBefores[i].addEventListener('click', switchContents);
		switchs[i].onclick = switchContents;
	}
}