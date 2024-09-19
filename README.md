# parallel fetching
usually there are fetching (async await) it does that in a waterfall manner means like a step(stair). one is finish then other is started (good when next is depend on prev) but if the both function are independent we can do that in parallel saving the runtime.
so we use Promise.all
> const[data1,data2]=Promise.all([getdata1(),getdata2()])
here if one get wrong all are mark wrong

> const[data1,data2]=Promise.allSettled([getdata1(),getdata2()])
but settled makes only the one wrong, wrong.

# server action can also be done in client
![demo](image.png)
![serveraction](image-1.png)

# normal server action in server component
![server demo](image-2.png) 
> button has type="submit"

![serveractionform](image-3.png)

### also remember to validate and auth
![alt text](image-4.png)

## adding a timeout
![alt text](image-5.png)

### fallback need to be above await

### if changes happens in suspense
![alt text](image-6.png)
put key so that if the key changes the fallback will happen(trigger)

## redirect cant be use in trycatch
![alt text](image-7.png)
error

the correct way is 
![alt text](image-8.png)