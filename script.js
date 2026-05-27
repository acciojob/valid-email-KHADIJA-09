function validEmail(str) {
  //your JS code here.
	var s = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.
		if (s.test(str))
	{
		return true;
	}
	return false;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
