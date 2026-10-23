import { NextResponse } from "next/server";

// Stateless JSON-RPC MCP endpoint. The writing desk has a single static entry and no editor, so this server
// exposes no tools: it answers initialize and an empty tools/list, and rejects everything else.

type RpcRequest = { id?: number | string | null; method?: string };

export async function POST(request: Request) {
  let id: RpcRequest["id"] = null;
  try {
    const body = (await request.json()) as RpcRequest;
    id = body.id ?? null;
    switch (body.method) {
      case "initialize":
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: { protocolVersion: "2024-11-05", capabilities: { tools: {} }, serverInfo: { name: "Writing Desk", version: "1.0.0" } },
        });
      case "tools/list":
        return NextResponse.json({ jsonrpc: "2.0", id, result: { tools: [] } });
      case "tools/call":
        return NextResponse.json({ jsonrpc: "2.0", id, error: { code: -32602, message: "This server has no tools" } }, { status: 400 });
      default:
        return NextResponse.json({ jsonrpc: "2.0", id, error: { code: -32601, message: `Unknown method: ${String(body.method)}` } }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ jsonrpc: "2.0", id, error: { code: -32700, message: "Parse error" } }, { status: 400 });
  }
}
