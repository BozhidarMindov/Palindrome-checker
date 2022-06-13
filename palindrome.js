function palindrome(str)
{
    let newStr = str.replace(/[^\w\s\']|_/g, "")
                    .replace(/\s/g, "");

    newStr = newStr.toLowerCase();

    let reverseString = newStr.split("").reverse().join("");

    if (reverseString === newStr)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}