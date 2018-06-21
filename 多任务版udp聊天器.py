import threading
import socket


def send_msg(udp_socket):
    dest_ip = input("请输入对方的Ip:")
    dest_port = int(input("请输入对方的port:"))
    while True:
        send_data = input("请输入您要发送的内容:")
        udp_socket.sendto(send_data.encode("utf-8"), (dest_ip, dest_port))


def recv_msg(udp_socket):
    while True:
        recv_data = udp_socket.recvfrom(1024)
        recv_msg = recv_data[0].decode("utf-8")
        print(recv_msg)


def main():
    udp_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    udp_socket.bind(("", 8080))

    t1 = threading.Thread(target=send_msg, args=(udp_socket,))
    t2 = threading.Thread(target=recv_msg, args=(udp_socket,))

    t1.start()
    t2.start()


if __name__ == "__main__":
    main()
