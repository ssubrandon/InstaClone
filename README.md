# To Provision Cluster and Run:
**installs make**
>./fresh.sh  

**installs necessary apps**  
>make new      

**provisions the Kubernetes cluster** 
>make start-cluster

**creates a docker image and copies the image onto kubernetes cluster** 
>make kompose

# To Clean:
**removes any images from kubernetes** 
>make kompose-clean

**shuts down the kubernetes cluster**  
>make shutdown-cluster

