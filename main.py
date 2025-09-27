import asyncio
import websockets

clients = set()

async def handler(websocket):
    clients.add(websocket)
    try:
        async for message in websocket:
            print(f"Mensaje recibido: {message}")
            for client in clients:
                if client != websocket:
                    await client.send(f"Eco: {message}")
    finally:
        clients.remove(websocket)

async def main():
    async with websockets.serve(handler, "0.0.0.0", 8765):
        print("Servidor WebSocket corriendo en ws://localhost:8765")
        await asyncio.Future()  # Mantener abierto

asyncio.run(main())
