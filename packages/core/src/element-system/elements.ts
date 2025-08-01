import type { ElementDefinition } from '../types';

export const elements: ElementDefinition[] = [
	// layout
	{
		id: 'div',
		type: 'layout',
		tag: 'div',
		classes: [],
		children: []
	},
	{
		id: 'container',
		type: 'layout',
		tag: 'div',
		classes: ['container', 'mx-auto', 'px-4'],
		children: []
	},
	{
		id: 'grid',
		type: 'layout',
		tag: 'div',
		classes: ['grid', 'grid-cols-2', 'gap-4'],
		children: []
	},
	{
		id: 'flex',
		type: 'layout',
		tag: 'div',
		classes: ['flex', 'items-center', 'justify-between'],
		children: []
	},
	// form
	{
		id: 'input',
		type: 'form',
		tag: 'input',
		classes: ['border', 'rounded', 'px-4', 'py-2'],
		children: [],
		inputAttributes: [
			{
				attribute: 'placeholder',
				type: 'text',
				label: 'Placeholder'
			},
			{
				attribute: 'type',
				type: 'select',
				label: 'Type',
				options: ['text', 'number', 'email', 'password']
			}
		]
	},
	{
		id: 'button',
		type: 'form',
		tag: 'button',
		classes: ['border', 'border-gray-300', 'px-4', 'py-2', 'rounded'],
		content: 'Button',
		children: []
	},
	{
		id: 'label',
		type: 'form',
		tag: 'label',
		classes: ['text-sm', 'font-medium'],
		content: 'Label text',
		children: []
	},
	// media
	{
		id: 'image',
		type: 'media',
		tag: 'img',
		classes: ['w-full', 'h-auto', 'rounded'],
		children: [],
		inputAttributes: [
			{
				attribute: 'src',
				type: 'text',
				label: 'Source'
			}
		]
	},
	// text
	{
		id: 'p',
		type: 'text',
		tag: 'p',
		classes: ['text-base'],
		content: 'Text content',
		children: []
	},
	{
		id: 'h1',
		type: 'text',
		tag: 'h1',
		classes: ['text-4xl', 'font-bold'],
		content: 'Heading 1',
		children: []
	},
	{
		id: 'h2',
		type: 'text',
		tag: 'h2',
		classes: ['text-3xl', 'font-bold'],
		content: 'Heading 2',
		children: []
	},
	{
		id: 'h3',
		type: 'text',
		tag: 'h3',
		classes: ['text-2xl', 'font-bold'],
		content: 'Heading 3',
		children: []
	},
	{
		id: 'h4',
		type: 'text',
		tag: 'h4',
		classes: ['text-xl', 'font-bold'],
		content: 'Heading 4',
		children: []
	},
	{
		id: 'h5',
		type: 'text',
		tag: 'h5',
		classes: ['text-lg', 'font-bold'],
		content: 'Heading 5',
		children: []
	},
	{
		id: 'h6',
		type: 'text',
		tag: 'h6',
		classes: ['text-base', 'font-bold'],
		content: 'Heading 6',
		children: []
	},
	{
		id: 'span',
		type: 'text',
		tag: 'span',
		classes: [],
		content: 'Span text',
		children: []
	},
	{
		id: 'italic',
		type: 'text',
		tag: 'i',
		classes: ['italic'],
		content: 'Italic text',
		children: []
	},
	{
		id: 'emphasis',
		type: 'text',
		tag: 'em',
		classes: ['italic'],
		content: 'Emphasized text',
		children: []
	},
	{
		id: 'strong',
		type: 'text',
		tag: 'strong',
		classes: ['font-bold'],
		content: 'Strong text',
		children: []
	},
	{
		id: 'link',
		type: 'text',
		tag: 'a',
		classes: ['text-blue-600', 'hover:text-blue-800', 'underline'],
		content: 'Link text',
		children: [],
		inputAttributes: [
			{
				attribute: 'href',
				type: 'text',
				label: 'URL'
			},
			{
				attribute: 'target',
				type: 'select',
				label: 'Target',
				options: ['_self', '_blank', '_parent', '_top']
			}
		]
	},
	// other
	{
		id: 'ul',
		type: 'other',
		tag: 'ul',
		classes: ['list-disc', 'list-inside'],
		children: []
	},
	{
		id: 'ol',
		type: 'other',
		tag: 'ol',
		classes: ['list-decimal', 'list-inside'],
		children: []
	},
	{
		id: 'li',
		type: 'other',
		tag: 'li',
		classes: ['list-inside'],
		children: []
	},
	{
		id: 'dl',
		type: 'other',
		tag: 'dl',
		classes: ['space-y-2'],
		children: []
	},
	{
		id: 'dt',
		type: 'other',
		tag: 'dt',
		classes: ['font-medium'],
		content: 'Term',
		children: []
	},
	{
		id: 'dd',
		type: 'other',
		tag: 'dd',
		classes: ['text-sm', 'text-gray-600'],
		content: 'Description',
		children: []
	}
];
