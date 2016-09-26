function ValidateNonEmpty(field, helpText)
 {
    //get the value from tf
    var value = field.value;
    //check the value
    if (value == "")
	{
        helpText.innerHTML = " * Required field";

        //change the background color by changing its class
        field.className = "invalid";
        return false;
    }
    else
	{
        helpText.innerHTML = "";
        field.className = "valid";
        return true;
    }
}

function ValidateEmail(field, helpText)
{
	//alert("ValidateEmail");
	if (document.getElementById("preferedemail").checked)
	{
		//check if email is prefered
		//var emailradio=document.getElementById("preferedemail");
		
		//get the value from the input element
		var value = field.value;
    
		//Required format: x@x.x
		var regex = /^\w{1,}\@\w{1,}\.\w{1,}$/;
	
		//or var regex = /^\(\d{2}\)\d{4}-\d{4}$/;

		//test the pater
		if (regex.test(value) == false)  //invalid
		{
			helpText.innerHTML = " * Email address should have the symbols '@' and '.'";

			//change the background color by changing its class
			field.className = "invalid";
			return false;
		}
		else
		{
			//valid
			helpText.innerHTML = "";
			field.className = "valid";
			return true;
		}
	}
	else
	{
		//valid
		helpText.innerHTML = "";
		field.className = "valid";
		return true;
	}
	

}


function ValidatePhone(field, helpText)
{
	
	//execute if preferred contact is phone
	if (document.getElementById("preferedphone").checked)
	{
		//get the value from the input element
		var value = field.value;
    
		//var regex = /^[(]\d{2}[)]\d{4}-\d{4}$/;
		//or var regex = /^\(\d{2}\)\d{4}-\d{4}$/;
	
		//Required format: (xx)xxxx-xxxx
		var regex = /^(\d{2}){0,1}\d{8}$/;

		//test the pater
		if (regex.test(value) == false)  //invalid
		{
			helpText.innerHTML = " * Phone number must 8 or 10 digits long";

			//change the background color by changing its class
			field.className = "invalid";
			return false;
		}
		else
		{ 
			//valid
			helpText.innerHTML = "";
			field.className = "valid";
			return true;
		}
	}
	else
	{ 
		//valid
		helpText.innerHTML = "";
		field.className = "valid";
		return true;
	}
	
}

function ValidateEmailPhone()
{
	
	//alert("Whazzup?");
	ValidateEmail(document.getElementById("email"), document.getElementById("emailHelp"));
	ValidatePhone(document.getElementById("phone"), document.getElementById("phoneHelp"));
	
}



function ValidateAll(form)
{
    var success = true;
    for (var i = 0; i < form.elements.length; i++)
	{
        //alert(form.elements[i]);
        var e = form.elements[i];
        if (e.onblur)
		{
			//onblur is handled
            success = e.onblur() && success;
        }
    }
    return success;
}

function ConfirmReset()
{
    var result = confirm("Do you want to reset the values?");

    //check if the user clicked OK button

    if (result)
    {
        var allInputs = document.getElementsByTagName("input");//allInput is an array
        for (var i = 0; i < allInputs.length; i++) {
            allInputs[i].className = "valid";
        }

        var allspans = document.getElementsByTagName("span");//allInput is an array
        for (var i = 0; i < allspans.length; i++) {
            //allspans[i].textContent = "";
            allspans[i].innerHTML = "";
        }
        
    }

    return result;
}

function SaveData()
{
    //get the value from txtName
    var userName = document.getElementById("name").value;
    //store the value in localStorage
    localStorage.User = userName;
    //test
    alert("Saved contact name: "+localStorage.User);
}

function LoadData()
{
    if (localStorage.User)
    {
        //get data from localStorage
        var userName = localStorage.User;

        //display the data in txtName
        document.getElementById("name").value = userName;
	}            
}
