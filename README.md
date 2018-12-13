# To Provision Cluster and Run:
**installs make**
1) ./fresh.sh  

**installs necessary apps** 
2) make new      

**provisions the Kubernetes cluster**
3) make start-cluster

**creates a docker image and copies the image onto kubernetes cluster**
4) make kompose

# To Clean:
**removes any images from kubernetes**
1) make kompose-clean

**shuts down the kubernetes cluster**
2) make shutdown-cluster

