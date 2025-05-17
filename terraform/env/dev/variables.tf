variable "aws_region" {
  description = "The AWS region to deploy the infrastructure"
  type        = string
  default     = "ap-south-1"
  
}
variable "aws_access_key" {
  description = "The AWS access key"
  type        = string
  default   = ""
  
}
variable "aws_secret_key" {
  description = "The AWS secret key"
  type        = string
  default   = ""
  
}
variable "aws_s3_bucket" {
  description = "The S3 bucket to use for storing Terraform state"
  type        = string
  default     = ""
  
}
variable "ami_id" {
  description = "The AMI ID to use for the EC2 instance"
  type        = string
  default     = ""
  
}
variable "instance_type" {
  description = "The type of EC2 instance to create"
  type        = string
  default     = "t2.micro"
  
}
variable "key_name" {
  description = "The name of the key pair to use for SSH access"
  type        = string
  default     = ""
  
}
variable "environment" {
  description = "The environment name"
  type        = string
  default     = "dev"
  
}
variable "aws_security_group" {
  description = "The security group for the EC2 instance"
  type        = string
  default     = ""
  
}
variable "vpc_id" {
  description = "The VPC ID to use for the EC2 instance"
  type        = string
  default     = ""
  

}
variable "subnet_ids" {
  description = "The subnet IDs to use for the EC2 instance"
  type        = list(string)
  default     = []
  # Example: ["subnet-12345678", "subnet-87654321"]
  # Note: This should be a list of subnet IDs in the same VPC as the security group
  
}