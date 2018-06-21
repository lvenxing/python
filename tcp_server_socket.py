from socket import *

def main():
	tcp_server_socket = socket(AF_INET, SOCK_STREAM)  # 创建套接字
	
	tcp_server_socket.bind(("", 8080))  # 绑定本地信息

	tcp_server_socket.listen(128)  # 将套接字变为被动状态，以待链接

	
	# accpet默认为阻塞状态，当有外部链接进来时会返回一个元组,
	# client_socket是创建的一个新的套接字已专门为该用户服务
	# socket_addr是客户端的地址
	client_socket, socket_addr = tcp_server_socket.accept() 

	recv_data = client_socket.recv(1024)  # 接收数据
	
	print("接收的数据为: %s" % recv_data.decode("gbk"))  # 打印接收内容

	client_socket.send("已接收请求".encode("utf-8"))  # 向客服端进行简单回复

	# 关闭套接字
	client_socket.close()
	tcp_server_socket.close() 





if __name__ == "__main__":
	main()
