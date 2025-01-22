import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa"; // For profile icon

// Dummy data
const chatList = [
	{
		id: 1,
		name: "Alice",
		lastMessage: "Hey! How's it going?",
		time: "10:45 AM",
		profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
		messages: [
			{ sender: "Alice", text: "Hey! How's it going?", time: "10:45 AM" },
			{
				sender: "You",
				text: "I'm good, thanks! How about you?",
				time: "10:46 AM",
			},
			{ sender: "Alice", text: "Hey! How's it going?", time: "10:45 AM" },
			{ sender: "Alice", text: "Hey! How's it going?", time: "10:45 AM" },

			{
				sender: "You",
				text: "I'm good, thanks! How about you?",
				time: "10:46 AM",
			},
			{ sender: "Alice", text: "Hey! How's it going?", time: "10:45 AM" },
			{
				sender: "You",
				text: "I'm good, thanks! How about you?",
				time: "10:46 AM",
			},
			{
				sender: "You",
				text: "I'm good, thanks! How about you?",
				time: "10:46 AM",
			},
			{
				sender: "You",
				text: "I'm good, thanks! How about you?",
				time: "10:46 AM",
			},
			{
				sender: "You",
				text: "I'm good, thanks! How about you?",
				time: "10:46 AM",
			},

			{ sender: "Alice", text: "Hey! How's it going?", time: "10:45 AM" },
			{
				sender: "You",
				text: "I'm good, thanks! How about you?",
				time: "10:46 AM",
			},
		],
	},
	{
		id: 2,
		name: "Bob",
		lastMessage: "See you later, bro!",
		time: "9:30 AM",
		profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
		messages: [
			{ sender: "Bob", text: "See you later, bro!", time: "9:30 AM" },
			{ sender: "You", text: "Catch you later!", time: "9:31 AM" },
		],
	},
];

const Chat = () => {
	const [selectedChat, setSelectedChat] = useState(null);
	const [message, setMessage] = useState("");

	// Handle chat selection from the list
	const handleSelectChat = (chat) => {
		setSelectedChat(chat);
	};

	// Handle sending a new message
	const handleSendMessage = (e) => {
		e.preventDefault();
		if (message.trim()) {
			const newMessage = {
				sender: "You",
				text: message,
				time: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			};
			setSelectedChat({
				...selectedChat,
				messages: [...selectedChat.messages, newMessage],
			});
			setMessage("");
		}
	};

	return (
		<div className="flex w-full h-[calc(100vh-74px)]">
			{/* Left side: Chat list */}
			<div className="w-1/3 bg-gray-100 p-4">
				<h2 className="text-xl font-semibold mb-4">Chats</h2>
				<ul className="space-y-4">
					{chatList.map((chat) => (
						<li
							key={chat.id}
							onClick={() => handleSelectChat(chat)}
							className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-gray-200 transition duration-200"
						>
							<img
								src={chat.profilePicture}
								alt={chat.name}
								className="w-12 h-12 rounded-full object-cover mr-3"
							/>
							<div className="flex-1">
								<p className="font-semibold text-gray-800">{chat.name}</p>
								<p className="text-sm text-gray-600 truncate">
									{chat.lastMessage}
								</p>
							</div>
							<p className="text-xs text-gray-500">{chat.time}</p>
						</li>
					))}
				</ul>
			</div>

			{/* Right side: Chat details */}
			<div className="w-2/3 bg-white p-4 flex flex-col">
				{/* Chat header */}
				{selectedChat ? (
					<div className="flex items-center mb-4">
						<img
							src={selectedChat.profilePicture}
							alt={selectedChat.name}
							className="w-12 h-12 rounded-full object-cover mr-3"
						/>
						<div>
							<h3 className="text-xl font-semibold text-gray-800">
								{selectedChat.name}
							</h3>
							<p className="text-sm text-gray-600">{selectedChat.time}</p>
						</div>
					</div>
				) : (
					<div className="text-center text-gray-600">
						Select a chat to start messaging
					</div>
				)}

				{/* Chat messages */}
				<div className="flex-1 overflow-y-auto mb-4 space-y-4">
					{selectedChat ? (
						selectedChat.messages.map((message, index) => (
							<div
								key={index}
								className={`flex ${
									message.sender === "You" ? "justify-end" : "justify-start"
								}`}
							>
								<div
									className={`p-3 rounded-lg max-w-xs ${
										message.sender === "You"
											? "bg-indigo-600 text-white"
											: "bg-gray-200 text-gray-800"
									}`}
								>
									<p className="text-sm">{message.text}</p>
									<p className="text-xs text-gray-500">{message.time}</p>
								</div>
							</div>
						))
					) : (
						<p className="text-center text-gray-600">No messages to display</p>
					)}
				</div>

				{/* Chat input */}
				{selectedChat && (
					<form onSubmit={handleSendMessage} className="flex items-center">
						<input
							type="text"
							placeholder="Type a message..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none"
						/>
						<button
							type="submit"
							className="ml-2 p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-200"
						>
							Send
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Chat;
