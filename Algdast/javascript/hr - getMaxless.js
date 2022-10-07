function getMaxLessThanK(n,k)   
{
    let g=0;
    for(let i=0; i<=n; i++)
        for(let j=i+1; j<=n; j++)
        if( (i&j)<k && (i&j)>g)
            g=i&j; 
    return g;

}