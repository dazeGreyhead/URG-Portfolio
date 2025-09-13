import type { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";

interface RichTextEditorProps {
	onChange: () => void;
	initialContent?: string;
	editable?: boolean;
	className?: string;
}

export default function RichTextEditor({
	onChange,
	initialContent,
	editable,
	className,
}: RichTextEditorProps) {
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent
			? (JSON.parse(initialContent) as PartialBlock[])
			: undefined,
	});
	return (
		<BlockNoteView
			editor={editor}
			editable={editable}
			theme="light"
			onChange={onChange}
			className={className ? className : ""}
		/>
	);
}
