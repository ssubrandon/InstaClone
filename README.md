# To Provision Cluster and Run:
**installs make**
>./fresh.sh  

**installs necessary apps**  
>make new      

**provisions the Kubernetes cluster** 
>make start-cluster

**creates a docker image and copies the image onto kubernetes cluster** 
>make instaclone

# To Clean:
**removes any images from kubernetes** 
>make instaclone-clean

**shuts down the kubernetes cluster**  
>make shutdown-cluster


log in user 
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
 "username": "admin", \ 
 "email": "admin%40admin.com", \ 
 "password": "admin" \ 
 }' 'http://localhost:80/api/accounts/login?access_token=1rqvSEXrk5qzV16TdDbGuZrGcKqI2GN3MIydCyusB7vjCCWPvQk1PHD5rj2Wla8i'
