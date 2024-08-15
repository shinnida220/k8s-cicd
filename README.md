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

```sh
docker build --no-cache --platform linux/amd64 -t nuelibk/animals-be:latest .
```

https://medium.com/@drramkumarlakshminarayanan/learn-fundamental-kubernetes-with-killercoda-part-1-474a9acabec6

kubectl expose pod nginx-pod --type=NodePort --port=80 --name=nginx-service


taint issue

The error message 1 node(s) had untolerated taint {node-role.kubernetes.io/control-plane: } indicates that your Kubernetes pod cannot be scheduled on the node because it has a taint that your pod does not tolerate. In this case, the node has the node-role.kubernetes.io/control-plane taint, which is typically applied to control plane nodes (formerly known as master nodes) to prevent regular workloads from running on them.

What Is a Taint?
Taints in Kubernetes allow nodes to repel a set of pods. A pod can only be scheduled on a tainted node if it has a corresponding toleration.


kubectl taint nodes <node-name> node-role.kubernetes.io/control-plane:NoSchedule-