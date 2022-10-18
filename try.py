def playSegments(coins):
    # Write your code here
    coinlength = len(coins)
    zerocount = 0
    onecount = 0
    for coin in coins:
        if coin == 0:
            zerocount +=1
        if coin == 1:
            onecount +=1
    highscore = onecount - zerocount
    
    minscore = ''
    if (highscore % 2)==0:
        minscore = (highscore / 2) + 1
    else:
        minscore = ((highscore-1)/2) + 1

    if minscore<=0:
        return 0
        
    print('minsore:',minscore)
    score1 = 0
    i=1
    for coin in coins:
        if coin==1:
            score1 = score1 + 1 
        if coin==0:
            score1 = score1 - 1 
        if score1 == minscore:
            break  
        i=i+1
    
    return i
    
coins = [1,0,0,1,0]
print('i:',(str(playSegments(coins))))