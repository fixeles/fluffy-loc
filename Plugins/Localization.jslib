mergeInto(LibraryManager.library, {

	GetSystemLanguageJS: function () {
		var returnStr = navigator.language;
		var bufferSize = lengthBytesUTF8(returnStr) + 1;
		var buffer = _malloc(bufferSize);
		stringToUTF8(returnStr, buffer, bufferSize);
		return buffer;
	}
	
	GetYandexLanguageJS: function () {
		var returnStr = ysdk.environment.i18n.lang;
		var bufferSize = lengthBytesUTF8(returnStr) + 1;
		var buffer = _malloc(bufferSize);
		stringToUTF8(returnStr, buffer, bufferSize);
		return buffer;
	}
});