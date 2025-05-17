module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.31"

  cluster_name    = "${var.environment}-eks-cluster"
  cluster_version = "1.31"

  # Optional
  cluster_endpoint_public_access = true

  # Optional: Adds the current caller identity as an administrator via cluster access entry
  enable_cluster_creator_admin_permissions = true

  cluster_compute_config = {
    enabled    = true
    node_pools = ["general-purpose"]
  }

  vpc_id     = ""
  subnet_ids = ["", ""]

  tags = {
    Environment = "dev"
    Terraform   = "true"
  }
}


# module "ec2_instance" {
#   source  = "terraform-aws-modules/ec2-instance/aws"

#   name = "single-instance"

#   instance_type          = "${var.instance_type}"
#   key_name               = "${var.key_name}"
#   monitoring             = true
#   vpc_security_group_ids = ""
#   subnet_id              = "${aws_subnet.public_subnet.id}"
#   ami =                    "${var.ami_id}"
#   tags = {
#     Terraform   = "true"
#     Environment = "dev"
#   }
  
# }