let a="we develop software we craft software"
let count=0
// b=a.split(" ")
a=a.split(" ")

for(i=0;i<a.length;i++)
{
  count=0
  for(j=0;j<a.length;j++)
  {
    if(a[i]==a[j])
    {
      count++
    }
  }
  if(count==1)
  {
    console.log(a[i])
  }
  
}