
Inserting  a node:

1. Create a new node
2. Starting at the root
    - Check if there is a root, if not - then new node becomes root
    - If there is a root, check if the value of the new node is greater than or less than the value of root

    - If it is greater, 
        1. Check to see if there is a node on right
            a. If there is, then move to that node & repeat the steps
            b. if there is not, then add that node as the right property 

    - If it is less
        1. Check to see if there is a node on left
            a. If there is, then move to that node & repeat the steps
             b. if there is not, then add that node as the left property 


