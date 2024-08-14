## Set Up Kubernetes with Minikube

### Start Minikube:

Fire up a single-node Kubernetes cluster on your local machine using Minikube:
```sh
minikube start
```

### Create a Deployment:

Define a deployment configuration file (deployment.yaml) for your application:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cicd-k8s-app-deployment
spec:
  replicas: 2  # This will run two replicas of your application pod
  selector:
    matchLabels:
      app: cicd-k8s-app
  template:
    metadata:
      labels:
        app: cicd-k8s-app
    spec:
      containers:
      - name: cicd-k8s-app
        image: <your-docker-hub-username>/my-app:latest  # Update with your image details
        ports:
        - containerPort: 3000
```


### Apply the Deployment:

Use kubectl apply to deploy your application based on the configuration file:
```sh
kubectl apply -f deployment.yaml
```

### Expose the Deployment as a Service:

Make your application accessible outside the cluster by creating a Service of type LoadBalancer:

```sh
kubectl expose deployment cicd-k8s-app-deployment --type=LoadBalancer --port=3000
```

### Check Pod Status:

Verify if your application pods are running successfully:
```sh
kubectl get pods
```

### Scale Up / Down
```sh
kubectl scale deployments/cicd-k8s-app-deployment --replicas=5

kubectl scale deployments/cicd-k8s-app-deployment --replicas=3
```

