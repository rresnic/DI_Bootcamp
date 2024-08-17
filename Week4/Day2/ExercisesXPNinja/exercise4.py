def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index
    # keep swapping the small value left until it meets one smaller
     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)