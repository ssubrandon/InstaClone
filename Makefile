new:
	./build.sh
kompose:
	./kompose.sh
kompose-clean:
	kompose down
start-cluster:
	sudo snap install kubectl --classic
	gcloud container clusters create instaclone-cluster --zone us-west1-c

shutdown-cluster:
	gcloud container clusters delete instacluster --zone us-west1-c
