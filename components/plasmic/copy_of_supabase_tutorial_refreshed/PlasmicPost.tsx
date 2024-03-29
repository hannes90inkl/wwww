// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x43pEJN2k2QkoGRM4VhiXy
// Component: oGEkZRaQbG-m

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { SupabaseEditButton } from "../../CodeComponents/UtilsComponents"; // plasmic-import: OUAnysApxvDr/codeComponent
import Button from "../../Button"; // plasmic-import: 2cx-U1hY5Rzc/component
import { SupabaseDeleteButton } from "../../CodeComponents/UtilsComponents"; // plasmic-import: h7fy4Y8cd8Y-/codeComponent
import { SupabaseMutation } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: cx55mTPYjtZn/codeComponent
import { SupabaseModal } from "../../CodeComponents/UtilsComponents"; // plasmic-import: SMbfFv3YFwrC/codeComponent
import { SupabaseTextField } from "../../CodeComponents/DisplayCollections"; // plasmic-import: dPNmvtm9vKJc/codeComponent
import { SupabaseImgField } from "../../CodeComponents/DisplayCollections"; // plasmic-import: hV3_NOijqgC_/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_supabase_tutorial_refreshed.module.css"; // plasmic-import: x43pEJN2k2QkoGRM4VhiXy/projectcss
import sty from "./PlasmicPost.module.css"; // plasmic-import: oGEkZRaQbG-m/css

import EditIcon from "./icons/PlasmicIcon__Edit"; // plasmic-import: 2ZeED8LGaeZT/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 0Y5d3IkdXMyo/icon
import DeleteIcon from "./icons/PlasmicIcon__Delete"; // plasmic-import: cQnRj44BuHAL/icon

createPlasmicElementProxy;

export type PlasmicPost__VariantMembers = {};
export type PlasmicPost__VariantsArgs = {};
type VariantPropType = keyof PlasmicPost__VariantsArgs;
export const PlasmicPost__VariantProps = new Array<VariantPropType>();

export type PlasmicPost__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPost__ArgsType;
export const PlasmicPost__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "image"
);

export type PlasmicPost__OverridesType = {
  root?: p.Flex<"div">;
  supabaseEditButton?: p.Flex<typeof SupabaseEditButton>;
  supabaseDeleteButton?: p.Flex<typeof SupabaseDeleteButton>;
  supabaseMutation?: p.Flex<typeof SupabaseMutation>;
  supabaseModal?: p.Flex<typeof SupabaseModal>;
  supabaseImgField?: p.Flex<typeof SupabaseImgField>;
};

export interface DefaultPostProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPost__RenderFunc(props: {
  variants: PlasmicPost__VariantsArgs;
  args: PlasmicPost__ArgsType;
  overrides: PlasmicPost__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___8Fb1T)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <div className={classNames(projectcss.all, sty.freeBox__euQtg)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__c5ZBj)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
              />
            </div>
          ),
          value: args.image
        })}
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__kCcmk)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__tuXiK)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__quhLn
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Title"}
                  </span>
                </React.Fragment>
              </div>
            ),
            value: args.title
          })}
          {p.renderPlasmicSlot({
            defaultContents: "Description",
            value: args.description,
            className: classNames(sty.slotTargetDescription)
          })}
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mPxPw)}
        >
          <SupabaseEditButton
            data-plasmic-name={"supabaseEditButton"}
            data-plasmic-override={overrides.supabaseEditButton}
            className={classNames("__wab_instance", sty.supabaseEditButton)}
            editPage={"/post/update/id"}
            id={"{{row.id}}"}
          >
            <Button
              className={classNames("__wab_instance", sty.button__ungVr)}
              hideLabel={true}
              shape={"bordered"}
              showStartIcon={true}
              startIcon={
                <EditIcon
                  className={classNames(projectcss.all, sty.svg__wfad1)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ipPhs
                )}
              >
                {"Edit"}
              </div>
            </Button>
          </SupabaseEditButton>
          <SupabaseDeleteButton
            data-plasmic-name={"supabaseDeleteButton"}
            data-plasmic-override={overrides.supabaseDeleteButton}
            className={classNames("__wab_instance", sty.supabaseDeleteButton)}
            id={"{{row.id}}"}
            modal={
              <SupabaseMutation
                data-plasmic-name={"supabaseMutation"}
                data-plasmic-override={overrides.supabaseMutation}
                className={classNames("__wab_instance", sty.supabaseMutation)}
                filters={[
                  {
                    name: "eq",
                    args: [{ column: "id", value: "{{local.id}}" }]
                  }
                ]}
                method={"delete"}
                redirectOnSuccess={"/"}
                tableName={"posts"}
              >
                <SupabaseModal
                  data-plasmic-name={"supabaseModal"}
                  data-plasmic-override={overrides.supabaseModal}
                  className={classNames("__wab_instance", sty.supabaseModal)}
                  showModal={false}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__cz1JL)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__qvH9P)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lleoJ
                        )}
                      >
                        {"Title"}
                      </div>
                      <SupabaseTextField
                        className={classNames(
                          "__wab_instance",
                          sty.supabaseTextField__kJi0H
                        )}
                        name={"{{row.title}}"}
                      />
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__thLM)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ziof
                        )}
                      >
                        {"Content"}
                      </div>
                      <SupabaseTextField
                        className={classNames(
                          "__wab_instance",
                          sty.supabaseTextField__ozj0N
                        )}
                        name={"{{row.content}}"}
                      />
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___0IUjn
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8J8Pm
                        )}
                      >
                        {"Image"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___405M5
                        )}
                      >
                        <SupabaseImgField
                          data-plasmic-name={"supabaseImgField"}
                          data-plasmic-override={overrides.supabaseImgField}
                          className={classNames(
                            "__wab_instance",
                            sty.supabaseImgField
                          )}
                          url={"{{row.imageUrl}}"}
                        />
                      </div>
                    </p.Stack>
                  </div>
                </SupabaseModal>
              </SupabaseMutation>
            }
          >
            <Button
              className={classNames("__wab_instance", sty.button__pLfn6)}
              hideLabel={true}
              shape={"borderedRedOnHover"}
              showStartIcon={true}
              startIcon={
                <DeleteIcon
                  className={classNames(projectcss.all, sty.svg__vShv6)}
                  role={"img"}
                />
              }
              submitsForm={true}
            />
          </SupabaseDeleteButton>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "supabaseEditButton",
    "supabaseDeleteButton",
    "supabaseMutation",
    "supabaseModal",
    "supabaseImgField"
  ],
  supabaseEditButton: ["supabaseEditButton"],
  supabaseDeleteButton: [
    "supabaseDeleteButton",
    "supabaseMutation",
    "supabaseModal",
    "supabaseImgField"
  ],
  supabaseMutation: ["supabaseMutation", "supabaseModal", "supabaseImgField"],
  supabaseModal: ["supabaseModal", "supabaseImgField"],
  supabaseImgField: ["supabaseImgField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  supabaseEditButton: typeof SupabaseEditButton;
  supabaseDeleteButton: typeof SupabaseDeleteButton;
  supabaseMutation: typeof SupabaseMutation;
  supabaseModal: typeof SupabaseModal;
  supabaseImgField: typeof SupabaseImgField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPost__VariantsArgs;
    args?: PlasmicPost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPost__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPost__ArgProps,
          internalVariantPropNames: PlasmicPost__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPost";
  } else {
    func.displayName = `PlasmicPost.${nodeName}`;
  }
  return func;
}

export const PlasmicPost = Object.assign(
  // Top-level PlasmicPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    supabaseEditButton: makeNodeComponent("supabaseEditButton"),
    supabaseDeleteButton: makeNodeComponent("supabaseDeleteButton"),
    supabaseMutation: makeNodeComponent("supabaseMutation"),
    supabaseModal: makeNodeComponent("supabaseModal"),
    supabaseImgField: makeNodeComponent("supabaseImgField"),

    // Metadata about props expected for PlasmicPost
    internalVariantProps: PlasmicPost__VariantProps,
    internalArgProps: PlasmicPost__ArgProps
  }
);

export default PlasmicPost;
/* prettier-ignore-end */
